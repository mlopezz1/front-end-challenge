import { Song } from '$/features/SongsList/Models/Song';
import { isEmpty } from 'lodash';
import create from 'zustand';
import { persist } from 'zustand/middleware';

const AUDIO_PLAYER_STORAGE_KEY = 'audio-player';

export interface AudioPlayerState {
  audioList: Song[];
  currentAudio: Song | null;
  currentTime: number;
  duration: number | null;
  audioRef: HTMLAudioElement | null;
  setCurrentAudio: (audio: Song) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  setAudioRef: (ref: HTMLAudioElement) => void;
  setAudioList: (audioList: Song[]) => void;
  toggleLike: (id: string) => void;
  setCurrentTime: (currentTime: number) => void;
  setDuration: (duration: number) => void;
  playNext: () => Promise<void>;
  playPrev: () => Promise<void>;
  play: (audio: Song) => Promise<void>;
  pause: () => void;
  resume: () => Promise<void>;
  updateCurrentTime: (time: number) => void;
}

const usePlayerStore = create(
  persist<AudioPlayerState>(
    (set, get) => {
      const initializeAudioListeners = (audio: HTMLAudioElement) => {
        audio.addEventListener('ended', () => {
          // check if there is a next audio
          const { audioList, currentAudio } = get();
          const currentAudioIndex = audioList.findIndex(
            (a) => a.id === currentAudio?.id,
          );
          const nextAudio = audioList[currentAudioIndex + 1];
          if (nextAudio) {
            get().playNext();
          }
        });
        audio.addEventListener('timeupdate', () => {
          get().setCurrentTime(audio.currentTime);
        });
        audio.addEventListener('durationchange', () => {
          get().setDuration(audio.duration);
        });
      };

      const mergeLikes = (apolloAudios: Song[], storeAudios: Song[]) =>
        apolloAudios.map((apolloAudio) => {
          const storeAudio = storeAudios.find((a) => a.id === apolloAudio.id);
          if (storeAudio) {
            return {
              ...apolloAudio,
              like: storeAudio.like,
            };
          }
          return apolloAudio;
        });
      return {
        audioList: [],
        setAudioList: (audioList: Song[]) =>
          set((state) => ({
            ...state,
            audioList: mergeLikes(audioList, state.audioList),
          })),
        toggleLike: (id: string) =>
          set((state) => {
            const audioList = state.audioList.map((song) =>
              song.id === id ? { ...song, like: !song.like } : song,
            );
            return { ...state, audioList };
          }),
        currentTime: 0,
        setCurrentTime: (currentTime: number) =>
          set((state) => ({ ...state, currentTime })),
        duration: null,
        setDuration: (duration: number) =>
          set((state) => ({ ...state, duration })),
        currentAudio: null,
        setCurrentAudio: (audio: Song) =>
          set((state) => ({ ...state, currentAudio: audio })),
        isPlaying: false,
        setIsPlaying: (isPlaying: boolean) =>
          set((state) => ({ ...state, isPlaying })),
        audioRef: null,
        setAudioRef: (ref: HTMLAudioElement) =>
          set((state) => ({ ...state, audioRef: ref })),
        playNext: async () => {
          const { audioList, currentAudio, isPlaying } = get();

          if (!currentAudio) return;

          const currentIndex = audioList.findIndex(
            (a) => a.id === currentAudio.id,
          );
          let nextIndex = currentIndex + 1;
          if (nextIndex >= audioList.length) {
            nextIndex = 0;
          }

          const nextAudio = audioList[nextIndex];

          if (isPlaying && nextAudio) {
            await get().play(nextAudio);
            return;
          }

          set((state) => ({
            ...state,
            currentAudio: nextAudio,
            currentTime: 0,
          }));
        },
        playPrev: async () => {
          const { audioList, currentAudio, isPlaying } = get();

          if (!currentAudio) return;
          const currentIndex = audioList.findIndex(
            (a) => a.id === currentAudio.id,
          );

          let previousIndex = currentIndex - 1;
          if (previousIndex < 0) {
            previousIndex = audioList.length - 1;
          }

          const previousAudio = audioList[previousIndex];
          if (isPlaying && previousAudio) {
            await get().play(previousAudio);
            return;
          }

          set((state) => ({
            ...state,
            currentAudio: previousAudio,
            currentTime: 0,
          }));
        },
        play: async (audio: Song) => {
          const { currentAudio, isPlaying, audioRef } = get();
          if (!audio) return;
          if (audio.id === currentAudio?.id && isPlaying) return;
          if ('paused' in (audioRef ?? {}) && !audioRef?.paused) get().pause();
          const newAudioRef = new Audio(audio.audio);
          initializeAudioListeners(newAudioRef);
          await newAudioRef.play();
          set((state) => ({
            ...state,
            currentAudio: audio,
            audioRef: newAudioRef,
            isPlaying: true,
          }));
        },
        pause: () => {
          const { audioRef } = get();
          if (audioRef) {
            audioRef.pause();
          }
          set((state) => ({ ...state, isPlaying: false }));
        },
        resume: async () => {
          const { audioRef } = get();
          if (!isEmpty(audioRef)) {
            initializeAudioListeners(audioRef);
            await audioRef.play();
            set((state) => ({ ...state, isPlaying: true }));
          } else {
            const { currentAudio, currentTime } = get();
            if (currentAudio) {
              const newAudioRef = new Audio(currentAudio.audio);
              initializeAudioListeners(newAudioRef);
              if (currentTime) {
                newAudioRef.currentTime = currentTime;
              }
              await newAudioRef.play();
              set((state) => ({
                ...state,
                audioRef: newAudioRef,
                isPlaying: true,
              }));
            }
          }
        },
        updateCurrentTime: (time: number) => {
          const { audioRef } = get();
          if (audioRef) {
            audioRef.currentTime = time;
          }
        },
      };
    },
    {
      name: AUDIO_PLAYER_STORAGE_KEY,
      partialize: (state) => ({ ...state, isPlaying: false }),
    },
  ),
);

export default usePlayerStore;

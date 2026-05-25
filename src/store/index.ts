import { create } from 'zustand';

interface QuestionState {
  currentQuestion: number;
  setCurrentQuestion: () => void;
  resetQuestions: () => void;
  answersQuantity: number;
  setAnswersQuantity: (quantity: number) => void;
  currentQuestionStatus: 'undone' | 'correct' | 'incorrect';
  setCurrentQuestionStatus: (status: 'undone' | 'correct' | 'incorrect') => void;
  isFinalized: boolean;
  setIsFinalized: (isFinalized: boolean) => void;
}

const useQuestionStore = create<QuestionState>((set) => ({
  currentQuestion: 0,
  setCurrentQuestion: () => set((state) => ({ currentQuestion: state.currentQuestion + 1 })),
  resetQuestions: () => set(() => ({ currentQuestion: 0 })),
  answersQuantity: 0,
  setAnswersQuantity: (quantity: number) => set(() => ({ answersQuantity: quantity })),
  currentQuestionStatus: 'undone',
  setCurrentQuestionStatus: (status: 'undone' | 'correct' | 'incorrect') => set(() => ({ currentQuestionStatus: status })),
  isFinalized: false,
  setIsFinalized: (isFinalized: boolean) => set(() => ({ isFinalized }))
}));

export { useQuestionStore };
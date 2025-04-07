import { create } from 'zustand';

type State = {
  name: string;
  email: string;
  phoneNumber: string;
  gender: string;
  college: string;
  course: string;
  branch: string;
  yearOfStudy: string;
  city: string;
  state: string;
  theme: string;
  teamSize: string;
  teamName: string;
  paymentScreenshot: File | null;
  isAgreed: boolean;
};

type Actions = {
  updateName: (name: State['name']) => void;
  updateEmail: (email: State['email']) => void;
  updatePhoneNumber: (phoneNumber: State['phoneNumber']) => void;
  updateGender: (gender: State['gender']) => void;
  updateCollege: (college: State['college']) => void;
  updateCourse: (course: State['course']) => void;
  updateBranch: (branch: State['branch']) => void;
  updateYearOfStudy: (yearOfStudy: State['yearOfStudy']) => void;
  updateCity: (city: State['city']) => void;
  updateState: (state: State['state']) => void;
  updateTheme: (theme: State['theme']) => void;
  updateTeamSize: (teamSize: State['teamSize']) => void;
  updateTeamName: (teamName: State['teamName']) => void;
  updatePaymentScreenshot: (file: File | null) => void;
  updateAgreement: (isAgreed: boolean) => void;
};

const authstore = create<State & Actions>((set) => ({
  name: '',
  email: '',
  phoneNumber: '',
  gender: '',
  college: '',
  course: '',
  branch: '',
  yearOfStudy: '',
  city: '',
  state: '',
  theme: '',
  teamSize: '',
  teamName: '',
  paymentScreenshot: null,
  isAgreed: false,

  updateName: (name) => set({ name }),
  updateEmail: (email) => set({ email }),
  updatePhoneNumber: (phoneNumber) => set({ phoneNumber }),
  updateGender: (gender) => set({ gender }),
  updateCollege: (college) => set({ college }),
  updateCourse: (course) => set({ course }),
  updateBranch: (branch) => set({ branch }),
  updateYearOfStudy: (yearOfStudy) => set({ yearOfStudy }),
  updateCity: (city) => set({ city }),
  updateState: (state) => set({ state }),
  updateTheme: (theme) => set({ theme }),
  updateTeamSize: (teamSize) => set({ teamSize }),
  updateTeamName: (teamName) => set({ teamName }),
  updatePaymentScreenshot: (file) => set({ paymentScreenshot: file }),
  updateAgreement: (isAgreed) => set({ isAgreed }),
}));

export default authstore;

import { create } from 'zustand';

import { Artist } from '@/types';

interface PreviewModalArtist {
  isOpen: boolean;
  data?: Artist;
  onOpen: (data: Artist) => void;
  onClose: () => void;
}

const usePreviewArtist = create<PreviewModalArtist>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Artist) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewArtist;

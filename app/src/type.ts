export interface IMovieAdd {
  title: string;
  year: number | undefined;
}
export interface IMovie {
  id: number;
  title: string;
  year: number | undefined;
}
export interface DeleteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface IEdit {
  movie: IMovie;
}

export interface IForm {
  handleAddMovie: (movie: IMovieAdd) => void;
  emptyMovie: IMovieAdd;
  type?: string;
}

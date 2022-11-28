type Props = {
  text: string;
};

export const ContentViewer = ({ text }: Props) => (
  <div className="content" dangerouslySetInnerHTML={{ __html: text }} />
);

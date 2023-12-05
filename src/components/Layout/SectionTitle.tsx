interface SectionTitleProps {
  title: string;
  titleNumber: string;
}
export const SectionTitle = ({ title, titleNumber }: SectionTitleProps) => {
  return (
    <div>
      <h2 className="title">
        <span className="numberSection">{titleNumber}</span>
        {title}
        <span className="liner"></span>
      </h2>
    </div>
  );
};

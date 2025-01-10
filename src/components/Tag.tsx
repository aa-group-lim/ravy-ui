type TTagProps = {
    name: string;
};
const Tag = ({ name }: TTagProps) => {
    return <div className="text-blue">#{name}</div>;
};

export default Tag;

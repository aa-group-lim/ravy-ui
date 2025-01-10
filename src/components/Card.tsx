import Tag from "./Tag";

type TCardProps = {
    title: string;
    description: string;
    rating: number;
    category: string;
    tags: string[];
    wordLength: number;
    readLength: number;
    userName: string;
};

const Card = ({
    title,
    description,
    rating,
    category,
    tags,
    wordLength,
    readLength,
    userName,
}: TCardProps) => {
    return (
        <div className="p-4 relative border-2 border-black">
            <div className="absolute top-2 right-2 text-sm">{category}</div>
            <div className="absolute bottom-2 right-2 text-sm">@{userName}</div>
            <div className="flex flex-row">
                <div className="text-lg font-bold">{rating}</div>
                <div className="text-lg ml-2">{title}</div>
            </div>
            <div className="text-sm mb-4">{description}</div>
            <div className="flex flex-row gap-1">
                {tags.map((tag) => (
                    <Tag key={tag} name={tag} />
                ))}
            </div>
            <div>
                {wordLength} words | {readLength} min read
            </div>
        </div>
    );
};

export default Card;

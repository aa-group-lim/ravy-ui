type TMainLayoutProps = {
    children: React.ReactNode;
};
const MainLayout = ({ children }: TMainLayoutProps) => {
    return <div>{children}</div>;
};

export default MainLayout;

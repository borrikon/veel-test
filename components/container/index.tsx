type ContainerProps = {
  children: React.ReactNode | React.ReactNode[];
};

function Container({ children }: ContainerProps) {
  return <div className="container">{children}</div>;
}

export default Container;

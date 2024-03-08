interface ContentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  left: React.ReactNode;
  right: React.ReactNode;
}

export default function ContentWrapper({ left, right, ...props }: ContentWrapperProps) {
  return (
    <div className="inner-container" {...props}>
      <div className="grid gap-20 md:grid-cols-2">
        {left}
        {right}
      </div>
    </div>
  );
}

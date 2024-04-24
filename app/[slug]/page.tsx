type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <>
      {/* Resolves to http://localhost:3000/hello-world/lunch.jpeg */}
      <img src="lunch.jpeg" style={{ maxWidth: "500px" }} />
    </>
  );
}

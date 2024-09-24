import Card from "app/components/Card";

export default function Sandbox(): JSX.Element {
  return (
    <>
      <div className="p-[14px]">
        <Card description="dummy" image="https://dummyimage.com/600x600/000/fff&text=dummy" title="card" />
      </div>
    </>
  );
}

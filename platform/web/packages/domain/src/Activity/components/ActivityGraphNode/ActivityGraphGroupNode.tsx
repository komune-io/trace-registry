import { useStore } from "reactflow";

export const ActivityGraphGroupNode = ({ id }: {id: string}) => {
  const nodes = useStore((store) =>
    store.getNodes().filter((n) => n.parentNode === id)
  );

  return (
    <span>
      Children
      {nodes.map((n) => (
        <>
          <br />
          {n.data.label}
        </>
      ))}
    </span>
  );
};
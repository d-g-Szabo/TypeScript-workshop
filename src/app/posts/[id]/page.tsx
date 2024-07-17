type ParamsType = {
  params: { id: string };
};

// export default function IdPage({ params }: ParamsType) {
//   return (
//     <div>
//       <h1>Post {params.id}</h1>
//     </div>
//   );
// }

export default function IdPage({
  params,
  props,
}: {
  params: { id: string };
  props: { id: string; name: string; age: number };
}) {
  return (
    <div>
      <h1>Post {params.id}</h1>
    </div>
  );
}

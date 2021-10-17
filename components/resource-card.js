import Image from "next/image";
import Router from 'next/router'

export const ResourceCard = ({item, index}) => {
  return (
    <div
      className="flex flex-col justify-items-center transition duration-200 ease-in-out transform hover:scale-105 hover:drop-shadow-xl"
      onClick={() => Router.push(`/resources/${item.fields["slug"]}`)}  
    >
      <div
        className="relative flex justify-center self-center shadow-sm"
        key={index}
        style={{
          height: 250,
          width: 180,
        }}
      >
        <Image
          layout={"fill"}
          src={"https:" + item.fields["thumbnail"].fields.file.url}
        />
      </div>
      <div className="py-4 self-center text-center">
        <h3 className="font-medium text-body">{item.fields["title"]}</h3>
      </div>
    </div>
  );
};

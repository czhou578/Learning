import { gql, useQuery } from "@apollo/client";
import Link from "./Link";
const linksToRender = [
  {
    id: "link-id-1",
    description: "Prisma gives you a powerful database toolkit 😎",
    url: "https://prisma.io",
  },
  {
    id: "link-id-2",
    description: "The best GraphQL client",
    url: "https://www.apollographql.com/docs/react/",
  },
];

const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;

const LinkList = () => {
  const { data } = useQuery(FEED_QUERY);

  return (
    <div>
      {linksToRender.map((link) => (
        <Link key={link.id} link={link} />
      ))}
    </div>
    // <div>
    //   {data && (
    //     <>
    //       {data.feed.links.map((link) => (
    //         <Link key={link.id} link={link} />
    //       ))}
    //     </>
    //   )}
    // </div>
  );
};

export default LinkList;

import { apiEndpoints } from "@/data/api-endpoints";
import { BackendClient } from "@/lib";
import { UseQueryOptions } from "@tanstack/react-query";

interface PostDetailsProps {
  id?: string | number;
}

const getPostsRequest = async (props: PostDetailsProps) => {
  const response = await BackendClient.get(apiEndpoints.posts(props.id));
  return response.data;
};

export const getPostsQuery = (props: PostDetailsProps) => {
  const { id = "" } = props;
  return {
    queryKey: ["posts", id],
    queryFn: () => getPostsRequest(props),
  };
};

export default getPostsQuery;

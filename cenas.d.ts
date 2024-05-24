import { DocumentContext } from "next/document";
import type {
  NextApiRequest as OriginalNextApiRequest,
  NextApiResponse,
} from "next/types";

declare module "next" {
  export type GetServerSidePropsContext<
    Q extends ParsedUrlQuery = ParsedUrlQuery,
    D extends PreviewData = PreviewData
  > = NextPageContext &
    OriginalGetServerSidePropertiesContext<Q, D> & {
      req: {
        foo: {};
      };
    };

  export type NextApiRequestInjected = OriginalNextApiRequest & {
    foo: {};
  };

  export type NextApiHandler<T = any> = (
    req: NextApiRequestInjected,
    res: NextApiResponse<T>
  ) => unknown | Promise<unknown>;

  export type GetServerSideProps<
    P extends { [key: string]: any } = { [key: string]: any },
    Q extends ParsedUrlQuery = ParsedUrlQuery,
    D extends PreviewData = PreviewData
  > = (
    context: GetServerSidePropsContext<Q, D>
  ) => Promise<GetServerSidePropsResult<P>>;

  export type GetInitialPropsDocumentContext = DocumentContext & {
    req: {
      foo: {};
    };
  };
}

export {};

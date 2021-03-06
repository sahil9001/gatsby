import { Span } from "opentracing"
import { IProgram } from "../../commands/types"
import { Runner } from "../../bootstrap/create-graphql-runner"
import { GraphQLRunner } from "../../query/graphql-runner"
import { Store, AnyAction } from "redux"
import { IGatsbyState } from "../../redux/types"
import { IGroupedQueryIds } from "../data-layer/types"
import { WebsocketManager } from "../../utils/websocket-manager"

export interface IQueryRunningContext {
  firstRun?: boolean
  program?: IProgram
  store?: Store<IGatsbyState, AnyAction>
  parentSpan?: Span
  gatsbyNodeGraphQLFunction?: Runner
  graphqlRunner?: GraphQLRunner
  pagesToBuild?: string[]
  pagesToDelete?: string[]
  queryIds?: IGroupedQueryIds
  websocketManager?: WebsocketManager
  filesDirty?: boolean
}

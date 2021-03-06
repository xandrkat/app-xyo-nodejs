/* eslint-disable @typescript-eslint/interface-name-prefix */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/member-delimiter-style */
import { IXyoDataResolver } from '../../graphql'
import { GraphQLResolveInfo } from 'graphql'

export interface IXyoAboutMe {
  name: string
  version: string
  ip: string
  address: string
  getIndex: () => number

  // this is deprecated
  boundWitnessServerPort: string
}

export class XyoAboutMeResolver
  implements IXyoDataResolver<any, any, any, any> {
  private aboutMe: IXyoAboutMe

  constructor(aboutMe: IXyoAboutMe) {
    this.aboutMe = aboutMe
  }

  public async resolve(
    obj: any,
    args: any,
    context: any,
    info: GraphQLResolveInfo
  ): Promise<any> {
    // peers field is deprecated
    // graphql port is deprecated

    return {
      name: this.aboutMe.name,
      version: this.aboutMe.version,
      ip: this.aboutMe.ip,
      boundWitnessServerPort: 11000,
      address: this.aboutMe.address,
      graphqlPort: 11001,
      index: this.aboutMe.getIndex(),
      peers: []
    }
  }
}

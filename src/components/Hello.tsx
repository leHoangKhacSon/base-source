import * as React from 'react'

export interface Props {
  compiler: string,
  framework: string,
}

export const Hello = (props: Props) => <h1>Hello props {props.compiler} and {props.framework}</h1>

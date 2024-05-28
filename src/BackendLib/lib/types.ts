import { NextRequest } from 'next/server'

export type AddPasswordDataTypes = {
  catagory: string
  name?: string
  password: string
  url?: string
  note?: string
  image?: string
  desc?: string
  description?: string
}

export interface RequestWithExtends extends NextRequest {}

export interface Add_password_data_types {
  catagory: string
  password_name: string
  password: string
  url: string
}

export interface add_notes_data_types {
  title: string
  description: string
  priority: string
}

export interface StaticNotesDataTypes {
  id: string
  title: string
  description: string
  priority: 'not important' | 'important' | 'normal' | 'very important'
}

export interface TodoDataTypes {
  id: string
  name: string
  description: string
  priority: 'not important' | 'important' | 'normal' | 'very important'
}

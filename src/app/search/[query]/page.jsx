import { redirect } from 'next/navigation';

export default function Page({params}) {
  redirect(`/search/${params.query}/1`);
}
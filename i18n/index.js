import { NextResponse } from 'next/server';
import enJson from './locale/en.json';
import trJson from './locale/tr.json';

const langMap = {
  'en': enJson,
  'tr': trJson
}

const i18n = (langKey) => {
  console.log(NextResponse.cookies())

  return langMap['tr'][langKey] ?? '';
}

export default i18n;
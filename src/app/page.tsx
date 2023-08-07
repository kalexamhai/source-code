'use client';

import { useState } from 'react';

import Navbar from './components/Navbar';
import ComponentHeading from './components/ComponentHeading';
import Tiles from './components/Tiles';

import {downloadFile} from './common/helpers'

import styles from './page.module.css'; ;

export default function Home() {
  const [ department, setDepartment ] = useState<string|null>(null);

  const onTileClick = (text: string) => {
    if (department) downloadFile(department, text);
    else setDepartment(text);
  };

  return (
    <>
      <Navbar/>
      <ComponentHeading heading={department ? 'Subjects' : 'Departments'}/>
      <Tiles department={department}
        onTileClick={onTileClick}
      />
    </>
  );
}

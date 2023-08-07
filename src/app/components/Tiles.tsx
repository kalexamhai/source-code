import { getDepartments, getSubjects } from '../common/helpers';

import styles from '../page.module.css';


const Tiles = ({ department, onTileClick }: Props) => {
  const tileClass = department ? styles.subjectTile : styles.departmentTile;
  const tileArray = department ? getSubjects(department) : getDepartments();

  return (
    <div className={styles.tilesContainer}>
      {
        tileArray.map((name: string, index: number) => (
          <div
            key={name + index}
            className={tileClass}
            onClick={() => onTileClick(name)}
          >
            {name}
          </div>
        ))
      }
    </div>
  );
};


type Props = {
  department: string|null;
  onTileClick: (text: string) => void;
}

export default Tiles;

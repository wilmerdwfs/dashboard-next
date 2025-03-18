'use client';

import styles from "./Tabla.module.css" ;

import React from "react";

interface Column {
  header: string;
  nameColumn: string;
}

interface TableProps {
  columns: Column[];
  data: Record<string, any>[];
  title: string;
}

const Tabla: React.FC<TableProps> = ({ columns, data ,title}) => {
  return (
    <div className={styles['table-container']}>
      <h4 className={styles['table-container-title']}>{title}</h4>
      <table className={styles.table}>
        <thead className={styles['table-thead']}>
          <tr className={styles['table-tr']}>
            {columns.map((col, index) => (
              <th key={index} className={styles['table-th']}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
            >
              {columns.map((col, colIndex) => (
                <td key={colIndex} className={styles['table-td']}>
                  {row[col.nameColumn]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;

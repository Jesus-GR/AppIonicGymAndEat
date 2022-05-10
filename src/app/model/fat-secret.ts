export class FatSecret {
  foodId: string;
  label: string;
  nutrients: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    ENERC_KCAL: number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    PROCNT: number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    FAT: number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CHOCDF: number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    FIBTG: number;
  };
  category: string;
  categoryLabel: string;
  image: string;
}

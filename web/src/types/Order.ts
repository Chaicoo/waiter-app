export interface Order {
  _id: string;
  table: string
  status: 'pending' | 'in progress' | 'done';
  products: {
	_id: string;
	quantity: number;
	product: {
		name: string;
		imagePath: string;
		price: number;
	};
  }[];
}
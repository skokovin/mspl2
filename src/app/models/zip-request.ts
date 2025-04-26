export class ZipRequest {
  id: string;
  client_name: string;
  request_id: string;
  request_day: number;
  request_month: number;
  request_year: number;
  target: string;
  target_place: string;
  imo: string;
  eq_type: string;
  product_type: string;
  factory_name: string;
  serials: Array<string> = [];
  serial: string;
  customer_person: string;
  supplier_person: string;
  incoterms_rule: string;
  valid_day: number;
  valid_month: number;
  valid_year: number;
  part_no: string;
  part_descr: string;
  part_id: string;
  part_unit: string;
  part_qty: number;
  part_price: number;
  part_price_sum: number;
  part_delivery: number;
  part_currency: string;
  status: number;

  constructor(id: string, client_name: string, request_id: string, request_day: number, request_month: number, request_year: number, target: string, target_place: string, imo: string, eq_type: string, product_type: string, factory_name: string, serials: Array<string>, serial: string, customer_person: string, supplier_person: string, incoterms_rule: string, valid_day: number, valid_month: number, valid_year: number, part_no: string, part_descr: string, part_id: string, part_unit: string, part_qty: number, part_price: number, part_price_sum: number, part_delivery: number, part_currency: string, status: number) {
    this.id = id;
    this.client_name = client_name;
    this.request_id = request_id;
    this.request_day = request_day;
    this.request_month = request_month;
    this.request_year = request_year;
    this.target = target;
    this.target_place = target_place;
    this.imo = imo;
    this.eq_type = eq_type;
    this.product_type = product_type;
    this.factory_name = factory_name;
    this.serials = serials;
    this.serial = serial;
    this.customer_person = customer_person;
    this.supplier_person = supplier_person;
    this.incoterms_rule = incoterms_rule;
    this.valid_day = valid_day;
    this.valid_month = valid_month;
    this.valid_year = valid_year;
    this.part_no = part_no;
    this.part_descr = part_descr;
    this.part_id = part_id;
    this.part_unit = part_unit;
    this.part_qty = part_qty;
    this.part_price = part_price;
    this.part_price_sum = part_price_sum;
    this.part_delivery = part_delivery;
    this.part_currency = part_currency;
    this.status = status;
  }


}

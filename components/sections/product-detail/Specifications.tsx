import { SpecificationData } from "@/lib/types/products.type";

type SpecificationsPropType = {
  spec: SpecificationData[];
};

export default function Specifications({ spec }: SpecificationsPropType) {
  return (
    <section id="product-specification" className="bg-natural-9 px-5 py-16">
      <div className="inner-container flex-col text-natural-1 gap-8">
        <h4 className="w-full text-h4 font-bold uppercase cust-underline after:bg-natural-1 after:w-[7.5rem] pb-3">
          Specifications
        </h4>
        <div className="w-full flex flex-col gap-8">
          {spec.map((attr) => {
            const values = attr.value.split(";");
            return (
              <div key={attr.id} className="flex max-md:flex-col gap-8">
                <p className="md:flex-[1] font-bold">{attr.key}</p>
                <ul className="indented-bullet-list md:flex-[4]">
                  {values.map((val, idx) => (
                    <li key={idx}>{val}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

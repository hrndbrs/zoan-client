export default function Specifications() {
  return (
    <section id="product-specification" className="bg-natural-9 px-5 py-16">
      <div className="inner-container flex-col text-natural-1 gap-8">
        <h4 className="w-full text-h4 font-bold uppercase cust-underline after:bg-natural-1 after:w-[7.5rem] pb-3">
          Specifications
        </h4>
        <div className="w-full flex flex-col gap-8">
          <div className="flex max-md:flex-col gap-8">
            <p className="md:flex-[1] font-bold">Processor</p>
            <ul className="md:flex-[4]">
              <li className="list-disc list-inside">
                4 Cores Intel Xeon E-2224 3,4Ghz Turbo 4.6Ghz 8MB L3 Cache
              </li>
            </ul>
          </div>
          <div className="flex max-md:flex-col gap-8">
            <p className="md:flex-[1] font-bold">Memory</p>
            <ul className="md:flex-[4]">
              <li className="list-disc list-inside">1x 16 GB UDIMM ECC DDR4</li>
            </ul>
          </div>
          <div className="flex max-md:flex-col gap-8">
            <p className="md:flex-[1] font-bold">PCI slot</p>
            <ul className="md:flex-[4]">
              <li className="list-disc list-inside">
                1x PCI-E 3.0 x16 (x16 link), 1x PCI-E 3.0 x8 (x4 link), 2x PCI 32bit/33MHz
              </li>
            </ul>
          </div>
          <div className="flex max-md:flex-col gap-8">
            <p className="md:flex-[1] font-bold">SATA Controller</p>
            <ul className="md:flex-[4]">
              <li className="list-disc list-inside">
                6 SATA3 ports supporting Intel®RSTe RAID 0,1,5, 10 for Windows or Linux
              </li>
            </ul>
          </div>
          <div className="flex max-md:flex-col gap-8">
            <p className="md:flex-[1] font-bold">M.2 Socket</p>
            <ul className="md:flex-[4]">
              <li className="list-disc list-inside">2x M.2 (NGFF 22110/2280/2260/2242)</li>
            </ul>
          </div>
          <div className="flex max-md:flex-col gap-8">
            <p className="md:flex-[1] font-bold">Drive</p>
            <ul className="md:flex-[4]">
              <li className="list-disc list-inside">256GB M.2 SSD</li>
              <li className="list-disc list-inside">1x 1TB SATA 7.2Krpm LFF</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

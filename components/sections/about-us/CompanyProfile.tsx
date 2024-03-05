import Image from "next/image";
import ContentWrapper from "./ContentWrapper";

export default function CompanyProfile() {
  return (
    <section id="company-profile" className="px-5 py-[7.5rem] max-md:py-16">
      <ContentWrapper
        left={
          <div className="relative max-md:hidden">
            <Image
              src="/images/company-profile/company-img.avif"
              alt="company-img"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        }
        right={
          <div className="flex flex-col gap-6">
            <h1 className="text-6xl uppercase font-bold max-md:text-3xl">About Us</h1>
            <p>
              <strong>Zoan Computing</strong> is the most up to date technology with Integrated
              Solution through research & development from the experts team to produce
              Infrastructure Technology in servers, storage, workstations, Internet of Things and
              also Client Computing. &nbsp;
              <br />
              <br />
              Based on the needs of the user, Zoan computing is very flexible in terms of
              customization. The needs of customers with the latest technology at very affordable
              prices, make Zoan Computing one of the preferable choices in computing for the future.
              <br />
              <br />
              The combination of solutions with software solutions such as Hyper Converged
              Technology, Artificial Intelligence Technology, Software Define Storage and even
              building applications to provide solutions that cannot be done by humans will make the
              Internet of Things an alternative choice for solving problems in various fields of
              life. State-of-the-Art technology, Zoan Computing is here to provide comprehensive
              solutions, making our lives better in the present and the future.
            </p>
          </div>
        }
      />
    </section>
  );
}

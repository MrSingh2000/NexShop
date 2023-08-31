import Card from "@/components/Card";

export default function Products() {
    return (
        <section>
          <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
            <div className="grid w-full grid-cols-2 gap-6 mx-auto md:grid-cols-3">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            
            </div>
          </div>
        </section>
    );
}
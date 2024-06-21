const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative w-full">
      <hr color="gray" className="h-1 opacity-40" />
      <div
        className="mx-auto w-full max-w-7xl mt-4
        font-body font-normal text-base text-text
        "
      >
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2 px-8">
          <p className="mb-6 h-5">Material Tailwind</p>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <p
                  color="blue-gray"
                  className="mb-3 h-4 font-medium opacity-40"
                >
                  {title}
                </p>
                {items.map((link) => (
                  <li key={link}>
                    <a href="#">
                      <p
                        color="gray"
                        className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                      >
                        {link}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center  py-4 md:flex-row md:justify-between">
          <p className="mb-4 h-4 text-center font-normal text-blue-gray-900 md:mb-0 px-8">
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/">Pivas Na Skidone</a>. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

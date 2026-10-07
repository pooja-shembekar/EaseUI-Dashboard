import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Tooltip } from "@/components/Tooltip/Tooltip";

const TooltipPage = () => {
  const buttonStyles = {
    top: "bg-sky-600 text-white hover:bg-sky-700 focus-visible:ring-sky-500",
    right: "bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:ring-emerald-500",
    bottom: "bg-rose-600 text-white hover:bg-rose-700 focus-visible:ring-rose-500",
    left: "bg-amber-400 text-slate-950 hover:bg-amber-500 focus-visible:ring-amber-500",
  };

  const usageCode = `import { Tooltip } from "@/components/Tooltip/Tooltip";

<Tooltip content="Your changes are saved" side="top">
  <button type="button">Save</button>
</Tooltip>

<Tooltip content="Open your profile" side="right">
  <button type="button">Profile</button>
</Tooltip>`;

  const propsData = [
    {
      prop: "content",
      type: "ReactNode",
      default: "-",
      description: "The information displayed when the trigger is focused or hovered.",
    },
    {
      prop: "children",
      type: "ReactElement",
      default: "-",
      description: "A single focusable element that opens the tooltip.",
    },
    {
      prop: "side",
      type: '"top" | "right" | "bottom" | "left"',
      default: '"top"',
      description: "Preferred placement relative to the trigger.",
    },
    {
      prop: "sideOffset",
      type: "number",
      default: "8",
      description: "Distance in pixels between the tooltip and its trigger.",
    },
    {
      prop: "delayDuration",
      type: "number",
      default: "400",
      description: "Delay in milliseconds before the tooltip opens.",
    },
    {
      prop: "className",
      type: "string",
      default: "-",
      description: "Additional classes applied to the tooltip content.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Tooltip</h1>
        <p className="text-lg text-gray-600">
          Brief context for an action, shown on hover or keyboard focus.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo code={usageCode}>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {(["top", "right", "bottom", "left"] as const).map((side) => (
              <Tooltip key={side} content={`Tooltip on the ${side}`} side={side}>
                <button
                  type="button"
                  className={`rounded-md px-4 py-2 text-sm font-medium shadow-sm transition duration-150 hover:brightness-95 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${buttonStyles[side]}`}
                >
                  {side[0].toUpperCase() + side.slice(1)}
                </button>
              </Tooltip>
            ))}
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default TooltipPage;
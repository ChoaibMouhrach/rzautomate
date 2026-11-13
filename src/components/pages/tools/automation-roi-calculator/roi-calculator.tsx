import { RoiInputsForm } from "@/components/pages/tools/automation-roi-calculator/roi-inputs";
import { RoiResults } from "@/components/pages/tools/automation-roi-calculator/roi-results";
import { useRoiState } from "@/components/pages/tools/automation-roi-calculator/use-roi-state";

export const RoiCalculator = () => {
  const { inputs, setField, setTask } = useRoiState();

  return (
    <section id="calculator" className="scroll-mt-16 pb-16 md:pb-28">
      <div className="page-container">
        <div className="grid gap-3 rounded-[2rem] bg-muted p-3 sm:p-4 lg:grid-cols-[11fr_10fr] lg:items-start">
          <div className="rounded-3xl bg-background p-6 sm:p-8">
            <RoiInputsForm inputs={inputs} onTask={setTask} onField={setField} />
          </div>
          <RoiResults inputs={inputs} />
        </div>
      </div>
    </section>
  );
};

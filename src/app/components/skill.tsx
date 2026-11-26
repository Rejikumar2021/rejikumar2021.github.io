interface SkillProps {
  type: string;
  percentage: number;
}

const skill = ({ type, percentage }: SkillProps) => {
  return (
    <>
      <div className="mb-3">
        <div className="flex justify-between">
          <p className="text-black  font-semibold">{type}</p>
          <p className="text-black font-semibold font-sans">{percentage}%</p>
        </div>
        <div className="my-2 bg-gray-200 rounded-[10px]">
          <div
            className="bg-blue-600 h-2 rounded"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </>
  );
};
export default skill;

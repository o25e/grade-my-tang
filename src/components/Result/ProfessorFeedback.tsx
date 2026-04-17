interface ProfessorFeedbackProps {
  emotion: string;
  comment: string;
}

export default function ProfessorFeedback({ emotion, comment }: ProfessorFeedbackProps) {
  return (
    <div className="flex items-start gap-3 mb-5">
      {/* 교수님 아바타 */}
      <div className="w-16 h-16 rounded-full bg-gray-200 border-4 border-gray-300 flex items-center justify-center text-4xl flex-shrink-0 shadow">
        {emotion}
      </div>

      {/* 말풍선 */}
      <div className="flex-1 relative">
        <div className="absolute -left-3 top-4 w-0 h-0
          border-t-[6px] border-t-transparent
          border-b-[6px] border-b-transparent
          border-r-[6px] border-r-gray-200"
        />
        <div className="bg-gray-100 border border-gray-200 rounded-2xl rounded-tl-none p-3 text-xs text-gray-800 leading-relaxed shadow-inner">
          {comment}
        </div>
      </div>
    </div>
  );
}

import { useMemo } from "react";

// Custom hook to calculate employee status
export function useEmployeeStatus(startDate) {
    const { yearsWorked, monthsWorked, daysUntilNextAnniversary, isProbation, isAnniversary } = useMemo(() => {
      if (!startDate || isNaN(new Date(startDate).getTime())) {
        return {
          yearsWorked: 0,
          monthsWorked: 0,
          daysUntilNextAnniversary: 0,
          isProbation: false,
          isAnniversary: false,
        };
      }
  
      const today = new Date();
      const start = new Date(startDate);
  
      let years = today.getFullYear() - start.getFullYear();
      let months = today.getMonth() - start.getMonth();
      if (months < 0 || (months === 0 && today.getDate() < start.getDate())) {
        years -= 1;
        months += 12;
      }
  
      const nextAnniversary = new Date(
        start.getFullYear() + years + 1,
        start.getMonth(),
        start.getDate()
      );
      const daysUntilNextAnniversary = Math.ceil(
        (nextAnniversary - today) / (1000 * 60 * 60 * 24)
      );
  
      const isProbation = years < 1;
      const isAnniversary = years > 0 && years % 5 === 0;
  
      return {
        yearsWorked: years,
        monthsWorked: months,
        daysUntilNextAnniversary,
        isProbation,
        isAnniversary,
      };
    }, [startDate]);
  
    return { yearsWorked, monthsWorked, daysUntilNextAnniversary, isProbation, isAnniversary };
  }
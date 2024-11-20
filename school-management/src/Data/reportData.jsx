// const reportData = [
//     { id: 1, name: 'John Doe', class: '10', section: 'A', maths: 75, science: 70, english: 60, nepali: 65, computer: 72, optAccountancy: 55 },
//     { id: 2, name: 'Jane Smith', class: '10', section: 'A', maths: 60, science: 55, english: 50, nepali: 65, computer: 60, optAccountancy: 52 },
//     { id: 3, name: 'Alice Johnson', class: '9', section: 'B', maths: 50, science: 45, english: 60, nepali: 58, computer: 48, optAccountancy: 60 },
//     { id: 4, name: 'Bob Brown', class: '9', section: 'B', maths: 72, science: 68, english: 75, nepali: 70, computer: 75, optAccountancy: 74 },
//     { id: 5, name: 'Charlie Green', class: '10', section: 'B', maths: 55, science: 60, english: 50, nepali: 65, computer: 70, optAccountancy: 58 },
//     { id: 6, name: 'Emily White', class: '9', section: 'A', maths: 48, science: 50, english: 53, nepali: 47, computer: 45, optAccountancy: 56 },
//     { id: 7, name: 'David Black', class: '10', section: 'C', maths: 65, science: 62, english: 59, nepali: 72, computer: 68, optAccountancy: 64 },
//     { id: 8, name: 'Sophia Blue', class: '10', section: 'C', maths: 60, science: 65, english: 55, nepali: 50, computer: 55, optAccountancy: 52 },
//     { id: 9, name: 'Lucas Brown', class: '9', section: 'A', maths: 70, science: 73, english: 72, nepali: 69, computer: 68, optAccountancy: 74 },
//     { id: 10, name: 'Mia Red', class: '9', section: 'A', maths: 62, science: 65, english: 66, nepali: 64, computer: 60, optAccountancy: 68 },
//     { id: 11, name: 'Liam Green', class: '10', section: 'B', maths: 59, science: 53, english: 62, nepali: 69, computer: 60, optAccountancy: 56 },
//     { id: 12, name: 'Olivia White', class: '9', section: 'B', maths: 55, science: 50, english: 58, nepali: 64, computer: 61, optAccountancy: 60 },
//     { id: 13, name: 'James Black', class: '10', section: 'A', maths: 60, science: 62, english: 61, nepali: 66, computer: 59, optAccountancy: 65 },
//     { id: 14, name: 'Amelia Blue', class: '10', section: 'C', maths: 65, science: 68, english: 55, nepali: 70, computer: 67, optAccountancy: 60 },
//     { id: 15, name: 'Ethan Brown', class: '9', section: 'A', maths: 72, science: 75, english: 69, nepali: 68, computer: 72, optAccountancy: 75 },
//     { id: 16, name: 'Ava Green', class: '9', section: 'B', maths: 58, science: 61, english: 56, nepali: 62, computer: 64, optAccountancy: 60 },
//     { id: 17, name: 'Jack White', class: '10', section: 'B', maths: 66, science: 63, english: 58, nepali: 70, computer: 65, optAccountancy: 62 },
//     { id: 18, name: 'Isabella Red', class: '10', section: 'A', maths: 54, science: 52, english: 55, nepali: 60, computer: 63, optAccountancy: 50 },
//     { id: 19, name: 'Mason Blue', class: '9', section: 'A', maths: 60, science: 65, english: 64, nepali: 66, computer: 62, optAccountancy: 63 },
//     { id: 20, name: 'Harper Green', class: '9', section: 'B', maths: 67, science: 70, english: 65, nepali: 60, computer: 64, optAccountancy: 68 },
//     { id: 21, name: 'Logan Black', class: '10', section: 'A', maths: 69, science: 65, english: 67, nepali: 68, computer: 64, optAccountancy: 66 },
//     { id: 22, name: 'Chloe White', class: '10', section: 'C', maths: 75, science: 71, english: 60, nepali: 65, computer: 62, optAccountancy: 70 },
//     { id: 23, name: 'Jackson Blue', class: '9', section: 'B', maths: 72, science: 75, english: 70, nepali: 68, computer: 70, optAccountancy: 73 },
//     { id: 24, name: 'Grace Brown', class: '9', section: 'A', maths: 50, science: 52, english: 48, nepali: 55, computer: 58, optAccountancy: 60 },
//     { id: 25, name: 'Sebastian Green', class: '10', section: 'B', maths: 62, science: 58, english: 65, nepali: 67, computer: 60, optAccountancy: 61 },
//     { id: 26, name: 'Charlotte Red', class: '10', section: 'A', maths: 75, science: 68, english: 62, nepali: 70, computer: 74, optAccountancy: 69 },
//     { id: 27, name: 'Benjamin White', class: '9', section: 'A', maths: 68, science: 60, english: 64, nepali: 70, computer: 73, optAccountancy: 72 },
//     { id: 28, name: 'Zoey Black', class: '9', section: 'B', maths: 70, science: 65, english: 73, nepali: 74, computer: 75, optAccountancy: 72 },
//     { id: 29, name: 'Henry Green', class: '10', section: 'A', maths: 59, science: 60, english: 66, nepali: 63, computer: 60, optAccountancy: 58 },
//     { id: 30, name: 'Lily Blue', class: '10', section: 'B', maths: 65, science: 68, english: 55, nepali: 60, computer: 58, optAccountancy: 61 },
//     { id: 31, name: 'Samuel Red', class: '9', section: 'A', maths: 75, science: 72, english: 69, nepali: 65, computer: 74, optAccountancy: 75 },
//     { id: 32, name: 'Ella Black', class: '10', section: 'A', maths: 55, science: 50, english: 52, nepali: 55, computer: 53, optAccountancy: 56 },
//     { id: 33, name: 'Owen White', class: '9', section: 'B', maths: 60, science: 61, english: 62, nepali: 60, computer: 65, optAccountancy: 68 },
//     { id: 34, name: 'Victoria Green', class: '10', section: 'B', maths: 60, science: 65, english: 64, nepali: 62, computer: 61, optAccountancy: 66 },
//     { id: 35, name: 'Madeline Red', class: '9', section: 'A', maths: 50, science: 53, english: 54, nepali: 60, computer: 58, optAccountancy: 55 },
//     { id: 36, name: 'Nathan Brown', class: '10', section: 'C', maths: 75, science: 72, english: 68, nepali: 75, computer: 70, optAccountancy: 74 },
//     { id: 37, name: 'Scarlett Green', class: '10', section: 'A', maths: 73, science: 70, english: 72, nepali: 75, computer: 65, optAccountancy: 72 },
//     { id: 38, name: 'Joshua Blue', class: '9', section: 'A', maths: 65, science: 66, english: 67, nepali: 68, computer: 62, optAccountancy: 64 },
//     { id: 39, name: 'Grace Brown', class: '9', section: 'B', maths: 63, science: 65, english: 60, nepali: 60, computer: 62, optAccountancy: 64 },
//     { id: 40, name: 'Wyatt Black', class: '10', section: 'B', maths: 72, science: 60, english: 66, nepali: 69, computer: 73, optAccountancy: 71 },
//     { id: 41, name: 'Samantha White', class: '9', section: 'B', maths: 58, science: 64, english: 62, nepali: 70, computer: 60, optAccountancy: 55 },
//     { id: 42, name: 'Levi Green', class: '9', section: 'A', maths: 74, science: 72, english: 68, nepali: 75, computer: 70, optAccountancy: 73 },
//     { id: 43, name: 'Jasper Blue', class: '10', section: 'A', maths: 61, science: 55, english: 60, nepali: 62, computer: 64, optAccountancy: 57 },
//     { id: 44, name: 'Avery Red', class: '9', section: 'A', maths: 67, science: 66, english: 60, nepali: 69, computer: 72, optAccountancy: 68 },
//     { id: 45, name: 'Mason Black', class: '10', section: 'B', maths: 58, science: 59, english: 54, nepali: 50, computer: 52, optAccountancy: 56 },
//     { id: 46, name: 'Evelyn White', class: '10', section: 'A', maths: 60, science: 58, english: 61, nepali: 64, computer: 60, optAccountancy: 59 },
//     { id: 47, name: 'Isaac Green', class: '9', section: 'B', maths: 68, science: 60, english: 69, nepali: 70, computer: 62, optAccountancy: 67 },
//     { id: 48, name: 'Carter Brown', class: '10', section: 'C', maths: 72, science: 75, english: 70, nepali: 68, computer: 70, optAccountancy: 74 },
//     { id: 49, name: 'Aiden Red', class: '9', section: 'B', maths: 75, science: 74, english: 71, nepali: 72, computer: 70, optAccountancy: 73 },
//     { id: 50, name: 'Ella Black', class: '10', section: 'A', maths: 55, science: 57, english: 61, nepali: 60, computer: 58, optAccountancy: 60 },
//   ];



const reportData = [
    { id: 1, name: 'John Doe', class: '10', section: 'A', maths: 75, mathsPractical: 12, science: 70, sciencePractical: 15, english: 60, englishPractical: 10, nepali: 65, nepaliPractical: 18, optComputer: 72, optComputerPractical: 20, optAccountancy: 55, optAccountancyPractical: 14 },
    { id: 2, name: 'Jane Smith', class: '10', section: 'A', maths: 60, mathsPractical: 20, science: 55, sciencePractical: 13, english: 50, englishPractical: 10, nepali: 65, nepaliPractical: 16, optComputer: 60, optComputerPractical: 21, optAccountancy: 52, optAccountancyPractical: 14 },
    { id: 3, name: 'Alice Johnson', class: '9', section: 'B', maths: 50, mathsPractical: 8, science: 45, sciencePractical: 12, english: 60, englishPractical: 14, nepali: 58, nepaliPractical: 20, optComputer: 48, optComputerPractical: 17, optAccountancy: 60, optAccountancyPractical: 22 },
    { id: 4, name: 'Bob Brown', class: '9', section: 'B', maths: 20, mathsPractical: 6, science: 68, sciencePractical: 21, english: 75, englishPractical: 11, nepali: 70, nepaliPractical: 15, optComputer: 75, optComputerPractical: 24, optAccountancy: 74, optAccountancyPractical: 19 },
    { id: 5, name: 'Charlie Green', class: '10', section: 'B', maths: 55, mathsPractical: 11, science: 60, sciencePractical: 13, english: 50, englishPractical: 12, nepali: 65, nepaliPractical: 18, optComputer: 70, optComputerPractical: 20, optAccountancy: 58, optAccountancyPractical: 16 },
    { id: 6, name: 'Emily White', class: '9', section: 'A', maths: 48, mathsPractical: 6, science: 50, sciencePractical: 7, english: 53, englishPractical: 9, nepali: 47, nepaliPractical: 10, optComputer: 45, optComputerPractical: 15, optAccountancy: 56, optAccountancyPractical: 8 },
    { id: 7, name: 'David Black', class: '10', section: 'C', maths: 65, mathsPractical: 16, science: 62, sciencePractical: 14, english: 59, englishPractical: 10, nepali: 72, nepaliPractical: 19, optComputer: 68, optComputerPractical: 21, optAccountancy: 64, optAccountancyPractical: 18 },
    { id: 8, name: 'Sophia Blue', class: '10', section: 'C', maths: 60, mathsPractical: 14, science: 65, sciencePractical: 16, english: 55, englishPractical: 11, nepali: 50, nepaliPractical: 12, optComputer: 55, optComputerPractical: 13, optAccountancy: 52, optAccountancyPractical: 10 },
    { id: 9, name: 'Lucas Brown', class: '9', section: 'A', maths: 70, mathsPractical: 22, science: 73, sciencePractical: 20, english: 72, englishPractical: 17, nepali: 69, nepaliPractical: 18, optComputer: 68, optComputerPractical: 15, optAccountancy: 74, optAccountancyPractical: 20 },
    { id: 10, name: 'Mia Red', class: '9', section: 'A', maths: 62, mathsPractical: 15, science: 65, sciencePractical: 14, english: 66, englishPractical: 11, nepali: 64, nepaliPractical: 16, optComputer: 60, optComputerPractical: 10, optAccountancy: 68, optAccountancyPractical: 17 },
    //... Include remaining students here ...
  ];

  export default reportData;
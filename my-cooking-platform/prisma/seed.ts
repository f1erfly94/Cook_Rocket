
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const categories = [
    'Перші страви',
    'Закуски',
    'Салати',
    'Основні страви',
    'М’ясні страви',
    'Рибні страви',
    'Гарніри',
    'Десерти',
    'Випічка',
    'Напої'
  ];

  for (const name of categories) {
    await prisma.category.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  console.log('Categories seeded!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

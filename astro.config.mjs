---
// Запрос к твоему API AdvCake
const response = await fetch('https://api.advcake.ru/common-feeds?pass=lXPhODj_9-HkHurD');
const json = await response.json();

// Берем первые 500 записей без фильтрации для теста
const courses = json.data ? json.data.slice(0, 500) : [];

const title = "Витрина курсов 2026 (Тест)";
---

<html lang="ru">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    <style>
        body { font-family: sans-serif; background: #f0f2f5; margin: 0; padding: 20px; }
        .header { text-align: center; margin-bottom: 30px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; max-width: 1200px; margin: 0 auto; }
        .card { background: white; border-radius: 12px; padding: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); display: flex; flex-direction: column; }
        .card img { width: 100%; height: 140px; object-fit: contain; margin-bottom: 10px; }
        .name { font-size: 16px; font-weight: bold; height: 3em; overflow: hidden; margin: 10px 0; }
        .price { font-size: 20px; color: #1a73e8; font-weight: bold; margin-bottom: 15px; }
        .btn { display: block; text-align: center; background: #28a745; color: white; padding: 10px; border-radius: 8px; text-decoration: none; font-weight: bold; }
    </style>
</head>
<body>
    <div class="header">
        <h1>{title}</h1>
        <p>Найдено элементов: {courses.length}</p>
    </div>

    <div class="grid">
        {courses.map((c) => (
            <div class="card">
                <img src={c.image} alt={c.name} />
                <div class="name">{c.name}</div>
                <p style="font-size: 12px; color: #666;">Школа: {c.school_name}</p>
                <div class="price">{c.price} ₽</div>
                <a href={c.url} class="btn" target="_blank">Подробнее</a>
            </div>
        ))}
    </div>
</body>
</html>

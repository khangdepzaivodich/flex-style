# Hướng dẫn khởi tạo và chạy Swagger với NestJS

## 1. Cài đặt Swagger cho NestJS

Chạy lệnh sau trong thư mục backend:
```
npm install --save @nestjs/swagger swagger-ui-express
```

## 2. Thêm cấu hình Swagger vào file `main.ts`

Thêm đoạn sau vào cuối hàm bootstrap:
```typescript
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const config = new DocumentBuilder()
  .setTitle('Flex Style API')
  .setDescription('API documentation for Flex Style e-commerce platform')
  .setVersion('1.0')
  .addBearerAuth()
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api/docs', app, document);
```

## 3. Khởi động server NestJS

Chạy lệnh:
```
npm run start:dev
```

## 4. Truy cập Swagger UI

Mở trình duyệt và truy cập:
```
http://localhost:8080/api/docs
```
(Thay đổi port nếu bạn cấu hình khác.)

---

**Lưu ý:**
- Swagger sẽ tự động cập nhật các API có sử dụng decorator của NestJS và @nestjs/swagger.
- Nên thêm mô tả, kiểu dữ liệu cho DTO để tài liệu rõ ràng hơn.

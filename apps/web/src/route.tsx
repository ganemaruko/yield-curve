import { Route, Routes } from "react-router-dom";
import { HomePage } from "src/components/pages/home/home_page";
import { NotFoundPage } from "src/components/pages/not_found/not_found_page";
import { OrderPage } from "src/components/pages/order/order_page";
import { YieldCurvePage } from "src/components/pages/yield_curve/yield_curve_page";

/**
 * App route page.
 */
export const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/yield-curve" element={<YieldCurvePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

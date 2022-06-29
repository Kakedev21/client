import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import AdminHeader from "../components/AdminHeader";
import AdminLinks from "../components/AdminLinks";

const data = [
  {
    name: "JAN",
    online: 100,
    walkin: 23,
  },
  {
    name: "FEB",
    online: 12,
    walkin: 23,
  },
  {
    name: "APR",
    online: 43,
    walkin: 54,
  },
  {
    name: "MAY",
    online: 56,
    walkin: 345,
  },
  {
    name: "JUN",
    online: 34,
    walkin: 64,
  },
  {
    name: "JULY",
    online: 23,
    walkin: 43,
  },
  {
    name: "AUG",
    online: 23,
    walkin: 54,
  },
];

const AdminDashBoard = () => {
  return (
    <>
      <AdminHeader />
      <AdminLinks />
      <div className="admin">
        <div className="adminContainer">
          <h3>Dashboard</h3>
          <div className="dashboard-row">
            <div className="col1">
              <h2>Bookings Today: 4</h2>
              <h2>Total User: 5</h2>
              <h2>Total Bookings: 20</h2>
            </div>
            <div className="col2">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="online" fill="#8884d8" />
                <Bar dataKey="walkin" fill="#82ca9d" />
              </BarChart>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashBoard;

import React from "react";
import {
  Cog6ToothIcon,
  UserIcon,
  ClipboardDocumentListIcon,
  ServerStackIcon,
  ChevronRightIcon,
  DevicePhoneMobileIcon,
  UsersIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/16/solid";

const Sidebar = () => (
  <aside className="w-64 bg-blue-900 text-white p-5 space-y-4 h-screen">
    <h1 className="text-2xl text-[35px] font-bold mb-[80px]">AppStorys</h1>
    <nav className="flex flex-col justify-between h-[85%]">
      <ul className="space-y-3 flex gap-[20px] flex-col">
        <li className="cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex gap-[10px] ">
              <ServerStackIcon className="w-[25px] h-[25px]" />
              Campaigns
            </div>
            <ChevronRightIcon className="w-[20px] h-[20px]" />
          </div>
        </li>
        <li className="cursor-pointer">
          <div className="flex gap-[10px]">
            <Cog6ToothIcon className="w-[25px] h-[25px]" />
            Integrations
          </div>
        </li>
        <li className="cursor-pointer">
          <div className="flex gap-[10px]">
            <UserIcon className="w-[25px] h-[25px]" />
            Audience
          </div>
        </li>
        <li className="cursor-pointer">
          <div className="flex gap-[10px]">
            <ClipboardDocumentListIcon className="w-[25px] h-[25px]" />
            Billing
          </div>
        </li>
        <li className="cursor-pointer">
          <div className="flex gap-[10px]">
            <DevicePhoneMobileIcon className="w-[25px] h-[25px]" />
            Manage Apps
          </div>
        </li>
        <li className="cursor-pointer">
          <div className="flex gap-[10px]">
            <UsersIcon className="w-[25px] h-[25px]" />
            Manage Users
          </div>
        </li>
      </ul>
      <ul className="space-y-3 flex gap-[20px] flex-col">
        <li className="cursor-pointer">
          {" "}
          <div className="flex gap-[10px]">
            <Cog6ToothIcon className="w-[25px] h-[25px]" />
            Settings
          </div>
        </li>
        <li className="cursor-pointer">
          <div className="flex gap-[10px]">
            <ArrowUpTrayIcon className="w-[25px] h-[25px]" />
            Sign Out
          </div>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;

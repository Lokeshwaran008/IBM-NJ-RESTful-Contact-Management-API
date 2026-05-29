import tkinter as tk
from tkinter import ttk
from models.user_model import UserModel


class ManageUsersScreen:

    def __init__(self):
        self.root = tk.Toplevel()
        self.root.title("Registered Users")
        self.root.geometry("700x400")

        tk.Label(self.root, text="Registered Users",
                 font=("Arial", 16, "bold")).pack(pady=10)

        # Create Table
        columns = ("ID", "Name", "Email", "Role")

        self.tree = ttk.Treeview(self.root,
                                 columns=columns,
                                 show="headings")

        for col in columns:
            self.tree.heading(col, text=col)
            self.tree.column(col, width=150)

        self.tree.pack(fill="both", expand=True, padx=20, pady=10)

        self.load_users()

    def load_users(self):
        users = UserModel.get_all_users()

        for user in users:
            self.tree.insert("", "end",
                             values=(user[0], user[1], user[2], user[3]))
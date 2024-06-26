import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Student } from '../models/studentModel';

export const studentApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),

  tagTypes:["Students"],



  endpoints: (builder) => ({
    getStudents: builder.query<Student[] , void>({
      query: () => '/students',
      providesTags:['Students'],
      transformResponse:(response:Student[],meta,args)=>{
        // return response.slice(0,5)
        return response.sort((a,b)=>a.studentName.localeCompare(b.studentName))
      }
    }),

    getStudent: builder.query<Student , string>({
      query: (id) => `/students/${id}`,
      providesTags:['Students']
    }),

    addStudents:builder.mutation<void,Student>({
      query:(student)=>({
        url:'/students',
        method:"POST",
        body:student,
      }),
      invalidatesTags:['Students']
    }),

    deleteStudent:builder.mutation<void,string>({
      query:(id)=>({
        url:`/students/${id}`,
        method:'DELETE',
      }),
      invalidatesTags:['Students'] 
    }),

    
    updateStudents:builder.mutation<void,Student>({
      query:({id, ...rest})=>({
        url:`/students/${id}`,
        method:"PUT",
        body:rest,
      }),
      invalidatesTags:['Students']
    }),
  }),
});

export const { useGetStudentsQuery, useAddStudentsMutation, useDeleteStudentMutation,useGetStudentQuery ,useUpdateStudentsMutation} = studentApi ;
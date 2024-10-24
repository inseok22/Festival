import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SignUp() {
  const [birthYear, setBirthYear] = useState("")
  const [birthMonth, setBirthMonth] = useState("")
  const [birthDay, setBirthDay] = useState("")

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-4">
        <h1 className="text-3xl font-bold text-center mb-6">회원가입</h1>
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="personal">개인 회원가입</TabsTrigger>
            <TabsTrigger value="host">주최 회원가입</TabsTrigger>
          </TabsList>
          <TabsContent value="personal">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">이름</Label>
                <Input id="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="personal-id">아이디</Label>
                <Input id="personal-id" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="personal-password">비밀번호</Label>
                <Input id="personal-password" type="password" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="personal-password-confirm">비밀번호 확인</Label>
                <Input id="personal-password-confirm" type="password" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="personal-email">이메일</Label>
                <Input id="personal-email" type="email" required />
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2 space-y-2">
                  <Label>성별</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="성별 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">남성</SelectItem>
                      <SelectItem value="female">여성</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-1/2 space-y-2">
                  <Label>생년월일</Label>
                  <div className="flex space-x-2">
                    <Select onValueChange={setBirthYear}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="년도" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                          <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select onValueChange={setBirthMonth}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="월" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                          <SelectItem key={month} value={month.toString().padStart(2, '0')}>{month}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select onValueChange={setBirthDay}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="일" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                          <SelectItem key={day} value={day.toString().padStart(2, '0')}>{day}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <Button type="submit" className="w-full">가입하기</Button>
            </form>
          </TabsContent>
          <TabsContent value="host">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="host-id">아이디</Label>
                <Input id="host-id" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="host-password">비밀번호</Label>
                <Input id="host-password" type="password" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="host-password-confirm">비밀번호 확인</Label>
                <Input id="host-password-confirm" type="password" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="host-email">이메일</Label>
                <Input id="host-email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="host-phone">연락처</Label>
                <Input id="host-phone" type="tel" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-name">회사명</Label>
                <Input id="company-name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="representative-name">대표자명</Label>
                <Input id="representative-name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="business-number">사업자 등록번호</Label>
                <Input id="business-number" required />
              </div>
              <Button type="submit" className="w-full">가입하기</Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
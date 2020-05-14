package com.bigdata.display.service.Impl;

import com.bigdata.display.entity.Expert;
import com.bigdata.display.entity.Technology;
import com.bigdata.display.map.ExpertMapper;
import com.bigdata.display.map.TechnologyMapper;
import com.bigdata.display.map.UserMapper;
import com.bigdata.display.pojo.LocalResult;
import com.bigdata.display.service.DisplayService;
import com.bigdata.display.util.TimeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

/**
 * @author like
 * @version 1.0
 * @date 2020/5/12 21:17
 */
@Service
public class DisplayServiceImpl implements DisplayService {

    @Autowired
    UserMapper userMapper;
    @Autowired
    ExpertMapper expertMapper;
    @Autowired
    TechnologyMapper technologyMapper;

    @Override
    public List<LocalResult> getAuthorityInformation() {
        List<LocalResult> localResult = userMapper.getLocalResult();
        return localResult;
    }

    @Override
    public  List<LocalResult> getProvincialInformation() {
        List<LocalResult> provinceResult = expertMapper.getProvinceResult();
        return  provinceResult;
    }

    @Override
    public List<Map<String, Object>> getageDstributionInformation() {
        List<Expert> experts = expertMapper.selectAll();
        int[] tmp = new int[5];
        for (Expert expert : experts) {
            int peoleAge = TimeUtil.getPeoleAge(expert.getBirthday());
            if (peoleAge>=0&&peoleAge<20){
                tmp[0]++;
            }else if (peoleAge>=20&&peoleAge<30){
                tmp[1]++;
            }else if (peoleAge>=30&&peoleAge<40){
                tmp[2]++;
            }else if (peoleAge>=40&&peoleAge<50){
                tmp[3]++;
            }else {
                tmp[4]++;
            }
        }
        List<Map<String,Object>> res = new ArrayList<>();
        Map<String,Object> tmp1 = new HashMap<>();
        tmp1.put("name","0岁以下");
        tmp1.put("value",tmp[0]);
        Map<String,Object> tmp2 = new HashMap<>();
        tmp2.put("name","20-29岁");
        tmp2.put("value",tmp[1]);
        Map<String,Object> tmp3 = new HashMap<>();
        tmp3.put("name","30-39岁");
        tmp3.put("value",tmp[2]);
        Map<String,Object> tmp4 = new HashMap<>();
        tmp4.put("name","40-49岁");
        tmp4.put("value",tmp[3]);
        Map<String,Object> tmp5 = new HashMap<>();
        tmp5.put("name","50岁以上");
        tmp5.put("value",tmp[4]);
        res.add(tmp1);
        res.add(tmp2);
        res.add(tmp3);
        res.add(tmp4);
        res.add(tmp5);
        return res;
    }

    @Override
    public List<Map<String, Object>> getProfessionInformation() {
        List<LocalResult> professionResult = expertMapper.getProfessionResult();
        return getPieMonth(professionResult);
    }

    @Override
    public List<Map<String, Object>> getSubjectInformation() {
        List<LocalResult> subjectResult = expertMapper.getSubjectResult();
        return getPieMonth(subjectResult);
    }

    @Override
    public Map getIntermediateInformationInformation() {
        Expert expert = new Expert();
        int expNum = expertMapper.selectCount(expert);
        Technology technology = new Technology();
        int techNum = technologyMapper.selectCount(technology);
        Map<String,Integer> res = new HashMap<>();
        res.put("expertsNum",expNum);
        res.put("technologyNum",techNum);
        return res;
    }

    @Override
    public List<Map<String, Object>> getBigMapInformationInformation() {
        List<LocalResult> provinceResult = expertMapper.getProvinceResult();
        return getPieMonth(provinceResult);
    }

    @Override
    public Map getTechnologyNumInformation() {
        List<Technology> technologies = technologyMapper.selectAll();
        int nowYear = TimeUtil.getYear(new Date());
        int[] tmp1 = new int[12];
        int[] tmp2 = new int[12];
        int[] tmp3 = new int[12];
        for (Technology technology : technologies) {
            int year = TimeUtil.getYear(technology.getMydate());
            if (nowYear==year){
                int month = TimeUtil.getMonth(technology.getMydate());
                tmp3[month-1]++;
            }else if (nowYear-1==year){
                int month = TimeUtil.getMonth(technology.getMydate());
                tmp2[month-1]++;
            }else if (nowYear-2==year){
                int month = TimeUtil.getMonth(technology.getMydate());
                tmp1[month-1]++;
            }
        }
        Map<String,int[]> res = new HashMap<>();
        res.put(String.valueOf(nowYear-2),tmp1);
        res.put(String.valueOf(nowYear-1),tmp2);
        res.put(String.valueOf(nowYear),tmp3);
        return res;
    }

    @Override
    public Map getTechnologyTopNInformation() {
        List<LocalResult> topNResult = technologyMapper.getTopNResult();
        Map<String,Object> res = new HashMap<>();
        String[] technology = new String[topNResult.size()];
        int[] nums = new int[topNResult.size()];
        for (int i = 0; i < topNResult.size(); i++) {
            technology[i] = topNResult.get(i).getName();
            nums[i] = topNResult.get(i).getMycount();
        }
        res.put("technology",technology);
        res.put("nums",nums);
        return res;
    }

    @Override
    public List<Map<String, Object>> getDisciplineDistributionInformation() {
        List<LocalResult> subjectResult = technologyMapper.getSubjectResult();
        return getPieMonth(subjectResult);

    }

    @Override
    public List<Map<String, Object>> getProfessionalDistributionInformation() {
        List<LocalResult> professionResult = technologyMapper.getProfessionResult();
        return getPieMonth(professionResult);
    }

    @Override
    public List<Map<String, Object>> getSpecialDistributionInformation() {
        List<LocalResult> specialResult = technologyMapper.getSpecialResult();
        return getPieMonth(specialResult);
    }

    private List<Map<String,Object>> getPieMonth(List<LocalResult> input){
        List<Map<String,Object>> res = new ArrayList<>();
        for (LocalResult result : input) {
            Map<String,Object> tmp = new HashMap<>();
            tmp.put("name",result.getName());
            tmp.put("value",result.getMycount());
            res.add(tmp);
        }
        return res;
    }
}
